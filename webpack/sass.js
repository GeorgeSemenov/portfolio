module.exports = function(paths){//pathc - необходим, т.к. sass-loader скомпилирует новые файлы.css из файлов.scss и чтобы с ними нужно дальше работать нужно запомнить новые пути, они и будут записанны в paths, который в последствии передастся в include
	return {
		module: {
			rules: [//тут указываем массив настроек для лоадеров
				{//Тут описываем настройки лоадера
					test: /\.scss$/,
					//include: paths, //ключ include принимает значение - массив путей или файловгде импортированные файлы будут трансформированны лоадером
					use: [//тут указываем сами лоадеры, к которым относятся эти настройки
						//Напомню - к файлам, которые подходят под regexp писаным в test: будут применены лоадеры начиная назшим и заканчивая высшим , или с права на лево.
						{//добавляет css стили в DOM дерево при помощи тега style и при этом ещё подгружает sourcemap
							loader: 'style-loader',
						},
						{//добавляет css модули в град зависисмостей
							loader: 'css-loader',
						},
						{//компилирует scss в css
							loader: 'sass-loader',
						},
					]
				}
			]
		}
	};
};