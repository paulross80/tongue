// gcc trunk
// -std=c++20 -O3

#include <iostream>
#include <concepts>

#include <string>
#include <vector>

using std::cout;
using std::endl;


// Example 1
// Requires integral types
template <typename Type> 
requires std::integral<Type>
constexpr auto sumIntegrals(Type a, Type b)
{
    return a + b;
}


// Example 2
// Requires a move constructible type
template <typename Type>
requires std::move_constructible<Type>
class TakeOwnership
{
    public:

        // ctor
        TakeOwnership(Type thing)
            : m_ownedThing(std::move(thing))
        {
            cout << "Don\'t worry, I own the \'thing\' now!" << endl;
            
            for (auto thing : m_ownedThing)
                cout << " - " << thing << endl;
            
            cout << endl;
        };

    private:

        Type m_ownedThing;

};

// Cannot be moved
class CannotBeMoved
{
    public:

        CannotBeMoved() = default;
        CannotBeMoved(CannotBeMoved&& other) = delete;

};


// Example 3
// Requires specific type of class
// that has specific member functions
template <typename Type>
concept FileLoadingClass = requires(Type instance)
{
    instance.load();    // must have load()
    instance.unload();  // must have unload()
};

// This class has the requirements
class WorksAsExpected
{
    public:

        void load()   { cout << "  - load()" << endl;   }
        void unload() { cout << "  - unload()" << endl; };

};

// This class does not!
class DoesntWorkAsExpected
{
    void hello();
};


// Resource Manager requires a
// file loading/unloading class
template <typename Type>
requires FileLoadingClass<Type>
class ResourceManager
{
    public:

        // ctor
        ResourceManager(Type& type)
            : m_fileLoader(type)
        {
            cout << "ResourceManager::ctor()" << endl;

            m_fileLoader.load();
            m_fileLoader.unload();
        }

    private:

        Type& m_fileLoader;

};



/*

Output:

ASM generation compiler returned: 0
Execution build compiler returned: 0
Program returned: 0
Example 1:
sum = 1500000

Example 2:
Don't worry, I own the 'thing' now!
 - 1
 - 2
 - 3

Example 3:
ResourceManager::ctor()
  - load()
  - unload()

*/
int main()
{

    // --- Example 1 -------------------------------
    cout << "Example 1:" << endl;
    cout << "sum = " << sumIntegrals<std::size_t>(500'000U, 1'000'000U) << endl << endl;

    // error: no matching function to call to ... blah blah
    //cout << "sum = " << sumIntegrals<double>(3.1, 54.2) << endl;
    //cout << "sum = " << sumIntegrals<std::string>("hello", "x") << endl;

    // --- Example 2 -------------------------------
    cout << "Example 2:" << endl;
    std::vector<unsigned int> v { 1U, 2U, 3U };
    TakeOwnership owner(v);

    // error: template constraint failure for 'template<class Type>
    // requires  move_constructible<Type> class TakeOwnership'
    //CannotBeMoved cannot;
    //TakeOwnership owner2(cannot);


    // --- Example 3 -------------------------------
    cout << "Example 3:" << endl;
    WorksAsExpected works;
    DoesntWorkAsExpected doesntWork;
    
    ResourceManager resMan(works);
    
    // error: template constraint failure for 'template<class Type>
    // requires  FileLoadingClass<Type> class ResourceManager'
    //ResourceManager resMan(doesntWork);

    return 0;                                        
}
