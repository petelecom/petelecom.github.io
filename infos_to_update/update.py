def updateLines(lines, regiao, sub):
	# encontra o inicio
	find = f'{regiao}_INIT'
	i = 0
	while i < len(lines):
		if find in lines[i]:
			break
		i += 1
	k = i
	find = f'{regiao}_END'
	while i < len(lines):
		if find in lines[i]:
			break
		i += 1
	del lines[k + 1:i]
	space = ''
	for x in lines[k]:
		if x in [' ', '	', '\t']:
			space = f'{space}{x}'
	for x in sub:
		k += 1
		x = x.replace('@init', space)
		lines.insert(k, f'{space}{x}\n')


def getImageItem(img, tipo):
	if tipo == 'gdrive':
		id_link = img.replace('https://drive.google.com/file/d/', '')
		id_link = id_link.replace('/view?usp=sharing', '')
		id_link = f'https://drive.google.com/uc?export=view&id={id_link}'

	elif tipo == 'web':
		id_link = img
	elif tipo == 'local':
		id_link = './img/%s' % (img,)
	else:
		raise Exception('Tipo inválido')
	return id_link


def updateDestaques(lines):
	import destaque
	tpl_indicadores = '<li data-target="#carouselExampleIndicators" data-slide-to="@index" @ative></li>'
	tpl_carousel = '<div class="carousel-item @ative"><img  style = "cursor: pointer;" onclick="location.href = \'@link_ref\'" class="d-block w-100" src="@img_source" alt="@name"></div>'
	indicadores, carousel = [], []
	for i in range(len(destaque.destaque)):
		lind = tpl_indicadores
		lcar = tpl_carousel
		dest = destaque.destaque[i]
		if i == 0:
			lind = lind.replace('@ative', 'class="active"')
			lcar = lcar.replace('@ative', 'active')
		else:
			lind = lind.replace('@ative', '')
			lcar = lcar.replace('@ative', '')
		lind = lind.replace('@index', '%d' % (i,))
		im = getImageItem(dest['banner'], dest['type'])

		lcar = lcar.replace('@img_source', im)

		lcar = lcar.replace('@link_ref', dest['link'])

		lcar = lcar.replace('@name', dest['id'])

		indicadores.append(lind)
		carousel.append(lcar)

	# procura pelo @@
	updateLines(lines, '@@PY_UPDATE_DESTAQUES_INDICADORES', indicadores)
	updateLines(lines, '@@PY_UPDATE_DESTAQUES', carousel)


def updateMinicursos(lines):
	import minicursos
	tpl_mini = """<div class="col-md-4">
@init	<div class="card" style="background:@background;">
@init		<div class="card-body text-center">
@init			<img src="@img_source" alt="@alt" width="100%" height="100%" >
@init			<a class="btn btn-dark btn-block" target="_blank" href = "@link" style="border:none;">@text_button</a>
@init		</div>
@init	</div>
@init</div>"""
	mini = []
	for i in range(len(minicursos.minicursos)):
		lmini = tpl_mini
		minicurso = minicursos.minicursos[i]
		lmini = lmini.replace('@img_source', getImageItem(minicurso['image'],minicurso['type']))
		lmini = lmini.replace('@alt', minicurso['alt'])
		lmini = lmini.replace('@link', minicurso['link'])
		lmini = lmini.replace('@background', minicurso['background'])
		lmini = lmini.replace('@text_button', minicurso['text button'])
		mini.append(lmini)
	updateLines(lines, '@@PY_UPDATE_MINICURSO', mini)


lines = open('../index.html', 'r', encoding='utf-8').readlines()

updateDestaques(lines)
updateMinicursos(lines)
with open('../index.html', 'w', encoding='utf-8') as f:
	f.writelines(lines)
