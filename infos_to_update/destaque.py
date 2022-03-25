"""
Destaque, caroucel com as novidades do PET
banner : endereço do arquivo do banner (recomendado 1080x1080)
link: link para redirecionar quando clicar
type: 'gdrive' (link do google drive), 'web' (link da web), 'local' (armazenado na pasta img)

id: nome do item
"""

destaque = [
	{'type': 'local', 'link': './concurso.html', 'id': 'Concurso 50 anos FEELT', 'banner': 'concurso.png'},
	{'type': 'gdrive', 'link': 'https://youtu.be/W8QS_akt_30', 'id': 'Roda de Conversa Saúde Mental', 'banner': 'https://drive.google.com/file/d/147D3QK1Mua_l327rv35S7P8hrQ01peaX/view?usp=sharing'},
	#{'type': 'gdrive', 'link': 'https://pet-telecom.coursify.me/courses/minicurso-octave', 'id': 'Minicurso Octave', 'banner': 'https://drive.google.com/file/d/1JyBi88rJNpd-m-Ylsx1nEOTn_CrMgdnH/view?usp=sharing'},
	{'type': 'local', 'link': '#', 'id': 'Resultado Processo Seletivo', 'banner': 'resultadoPS.png'},
]
