## Testnet Toolbox 
#### Сделал инструменты для работы с тестнетами на библиотеке viem.sh. Реализованы мосты, дексы и личная фабрика контрактов для пользователей,  которые не хотят заниматься деплоями смарт контрактов. Все вопросы вы можете задать на форуме или предложить свои идеи - ```@viemcrypto```
## Установка и настройка скрипта.
Для запуска софта вам понадобится выполнить простые действия.  
1. Скачайте node js 18.18.0 c cайта https://nodejs.org/
2. Если вы все сделали правильно, откройте powershell или консоль vscode и впишите команду ```npm i -g typescript``` - она позволит вам установить typescript, что бы код работал адекватно.
3. После того как вы все установите, скачайте или склонируйте репозиторий на ваш пк, после зайдите в него и установите зависимости командой  - ```npm i ```.
4. Откройте файл settings.ts и настройте модули которые вам необходимы. Учтите что в тестовых сетях должен быть баланс!
5. После настройки окружения, вставьте ваши приватные ключи в файл privateKeys.txt и впишите команду ```npm run dev```.

Готово! Теперь вы можете загнать пачку аков в тестнеты для вашего будущего дропа. 

## Немного о планах и о проекте. 
В идеале будут добавляться дексы и другие проекты, но пока лично понял что многие тестнеты переносят свои сетки на ораклы сеполии и именно из-за этого многие дексы отваливаются, поэтому было принято решение заменить их своими контрактами. Аналоговые смарт-контракты вы сможете найти на нашем сервисе ```etherlockdao.xyz```. 
Все вопросы и идеи или ошибки пишите в devchat на форуме - ```@viemcrypto```. 
