## Sobre o processo seletivo

Planejamento:<br/>
-Quando o projeto foi iniciado, primeira coisa a ser feita, foi estudar a documentação dos requisitos, UI5 web components, SCSS (Já tive algum contato) e Redux.<br/>
-Após essa etapa foi estudada a documentação da api a ser utilizada e foram feitos testes para verificar o formato do retorno da api e como ela se comporta.<br/>
-Criei um [figma](https://www.figma.com/file/6flMM7wOuMnNMpL3eFORGo/Untitled?node-id=0%3A1&t=x0DD8Jex1hBQctNW-0) para ter um planejamento mais claro do que era para ser feito. <br/>
-Iniciado um projeto teste para verificar as funcionalidades do bootstrap e enfim iniciado o projeto no github.<br/>
<br/>
Dificuldades:<br/>
-UI5 web components foi muit pesado para o meu computador, a instalação dos pacotes junto ao CRA levou cerca de 20 minutos e a inicialização do servidor levava cerca de 12 minutos, então ficava quase inviável de programar.<br/>
-Maior parte do tempo foi gasto tentando resolver esse problema de performance, visto que era bem demorado a cada alteração do código levar 12 minutos para verificar as mudanças visualmente.<br/>
-Consegui burlar essa demora programando fazendo pushes na main e verificando alterações no deploy, já que a build levava cerca de 1 min, bem mais rápido que executado localmente. O problema principal para dessa solução é o padrão de commit, tendo muitos commits somente para resolver alguns problemas de css.<br/>
-Os ícones do UI5 web components por algum motivo não eram reenderizados, vou continuar tentando descobrir o motivo.<br/>
<br/>
Conclusão:<br/>
-Maior parte do tempo foi gasto tentando resolver o problema de performance ( que não foi resolvido ) e com o tempo restante foi feito a base visual do projeto. O tempo restante não foi suficiente para implementação da api no projeto. Pensei em fazer o projeto sem o UI5 ( o que teria sido bem mais rápido ) mas não achei que seria válido, já que um dos quesitos principais era o uso da ferramenta. <br/>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
