const readline = require('readline')
const rl = readline.createInterface(
	{
		input: process.stdin,
		output: process.stdout
	}
)
main()
function main() {
    rl.question('Введите слово для проверки, является ли оно полиндромом. Для выхода из програамы нажмите Ctrl+C\n>', (str) => {
        function isPalindrom(str) {
            str = str.toLowerCase()
            for (let i = 0; i <= str.length / 2; i++) {
                if (str[i] !== str[(str.length - 1 - i)]) {
                    return "Ваше слово не является палиндромом"
                }
            }
            return "Ваше слово является палиндромом"
        }
        console.log(isPalindrom(str))
        main()
    });
}
