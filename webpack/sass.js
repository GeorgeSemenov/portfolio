const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // чтобы вытащить scss и css код в отдельный фойл а не в style-loader
module.exports = function(paths){//pathc - необходим, т.к. sass-loader скомпилирует новые файлы.css из файлов.scss и чтобы с ними нужно дальше работать нужно запомнить новые пути, они и будут записанны в paths, который в последствии передастся в include
	return {
		module: {//по умолчанию webpack может работать только с JS и JSON, чтобы он работал с другими сущностями, такими как scss ему нужны модули 
			rules: [//тут указываем массив настроек для лоадеров, в данный массив передаётся объект описывающий лоадеры
				{//Тут описываем настройки лоадера
					test: /\.scss$/,//Указываем регулярное выражение (regexp), т.е. селектор, который будет говорить webpack'у что нужно искать файлы удовлетворяющие данному паттерну, и если таковые найдутся то тогда ему нужно использовать лоадеры указанные ниже
					//include: paths, //ключ include принимает значение - массив путей или файловгде импортированные файлы будут трансформированны лоадером
					use: [//тут указываем сами лоадеры, к которым относятся эти настройки
						//Напомню - к файлам, которые подходят под regexp писаным в test: будут применены лоадеры начиная назшим и заканчивая высшим , или с права на лево.
						{//извлекает css код в файлы
							loader: MiniCssExtractPlugin.loader,
							options:{
								sourceMap: true,
							}
						},
						{//добавляет css модули в град зависисмостей
							loader: 'css-loader',
							options:{
								sourceMap: true,
							}
						},
						{//компилирует scss в css
							loader: 'sass-loader',
							options:{
								sourceMap: true,
							}
						},
					]
				}
			]
		}
	};
};