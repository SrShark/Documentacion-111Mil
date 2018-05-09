module.exports = {
  title: 'DOCUMENTACIÓN',
  description: 'Documentación del proyecto modulo delivery para el plan 111mil - UTN',
  configureWebpack: {
    output: {
      publicPath: './'
    }
  },
  themeConfig: {
    nav: [
      { text: 'INICIO', link: '/' },
      { text: 'DRIVE', link: 'https://drive.google.com/drive/folders/1O3O2EPWWIZXrJJhvsk-1TIU2k7gCWGyW?usp=sharing' },
      { text: 'SLACK', link: 'https://111vm.slack.com/' }
    ],
    sidebar: [
      {
        title: 'INDICE',
        collapsable: false,
        children: [
          ['/#introduccion' ,'Introducción'],
          ['/#desarrollo' ,'Desarrollo'],
          ['/#limite' ,'Limite'],
          ['/#propiedades-del-sistema' ,'Propiedades del sistema'],
          ['/#arquitectura-de-software' ,'Arquitectura de Software'],
          ['/#tecnologias-aplicadas' ,'Tecnologias Aplicadas'],
          ['/#diagrama-de-entidad-relacion-der' ,'Diagrama de Entidad-Relación (DER)'],
          ['/#diagrama-de-clases-uml' ,'Diagrama de Clases (UML)'],
          ['/#diagrama-casos-de-usos-use-case' ,'Diagrama Casos de Usos (Use Case)'],
          ['/#maquina-de-estado' ,'Máquina de Estado'],
          ['/#historial-de-versiones' ,'Historial de versiones'],
          ['/#integrantes' ,'Integrantes']
        ]
      }
    ],
    search: false,
    repo: 'https://github.com/Plan111UTN',
    repoLabel: 'GITHUB'
  }
}