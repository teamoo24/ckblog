import ThemeSwitcher from "./ThemeSwitcher"

const Header =() => {
    return (
        <header className="bg-gray-800 text-white p-4 dark:bg-gray-700 flex justify-between items-center">
          <h1 className="text-xl">CK Blog</h1>
          <ThemeSwitcher />
        </header>
    )
}

export default Header