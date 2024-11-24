# Login

Procedimiento para hacer este proyecto
Siguiendo lo que hicimos en el proyecto anterior de login, ahora consumiremos una app de terceros, para ello haremos de nuevo lo que hicimos en el proyecto login

Creamos un nuevo proyecto de angular
![image](https://github.com/user-attachments/assets/46b2f40c-0c64-4190-8b3c-0ea2d3c23b9e)

Posteriormente crearemos todos los componentes que necesitaremos

![image](https://github.com/user-attachments/assets/52d036b3-4016-4dfe-97f2-679cec577fce)

footer

![image](https://github.com/user-attachments/assets/22689268-6e35-4e0b-bd2c-85c6c3beef9e)

home

![image](https://github.com/user-attachments/assets/4d487910-a997-49db-8890-15bc2623b621)

Login, este sera uno de los componentes mas importantes ya que aqui gestionaremos la lógica para el inicio de sesion usando los datos del api

![image](https://github.com/user-attachments/assets/fe21153d-0639-4b2e-bd0c-5c11afecd282)

typescript del login, aqui se maneja la lógica, usando la información que nos devuelve el api verficcaremos si existen las credenciales y redireccionamos al usuario
de lo contrario mostramos un mensaje de error
![image](https://github.com/user-attachments/assets/7d09533e-21c8-4e9f-b264-2a90c56521d2)


user service, aqui es donde recuperamos la informacion del api y la enviamos para que podamos usarla en la validación

![image](https://github.com/user-attachments/assets/4e035b07-d5b4-40d8-9c81-72ec4c6dc7df)

pantalla de login

![image](https://github.com/user-attachments/assets/03defd8d-71fb-4545-95c1-183538b081a4)

mensaje de error

![image](https://github.com/user-attachments/assets/2a8056e8-058d-469e-98e5-f7350f1f4eab)

Acceso con credenciales

![image](https://github.com/user-attachments/assets/52de09a8-314e-4c84-ba09-7f2544177279)

![image](https://github.com/user-attachments/assets/d4d13e4f-0ae2-453a-9afa-45675c68f988)

En la funcion de login modifique el código para recuperar la imagen del usuario y ocuparla posteriormente
![image](https://github.com/user-attachments/assets/ee42ce25-5500-460e-83c9-00837609cd3c)

En el navbar, agregue la imagen del usuario que guardamos anteriormente
![image](https://github.com/user-attachments/assets/6a9c75d6-ca2d-4016-9b86-6bbc5f9521a3)


Una vez teniendo esto agregaremos un servicio y un componente que nos ayudara a mostrar la información


La siguiente api me envia una lista de productos, con sus respectivos nombres, imagenes, categorias, etc.
https://fakestoreapi.com/products/
![image](https://github.com/user-attachments/assets/4ea88a8d-1ec6-4a24-ba80-0e8ed8c3fb96)


En la parte html de mi componente muestro la tabla en donde estan todos los productos, agregue opciones como un campo de busqueda y botones para editar el contenido localmente ya que no podemos afectar la api
![image](https://github.com/user-attachments/assets/52dafd09-ca6c-496c-b977-c0da0cada679)

En el typescript de mi componente es donde manejo la lógica de estos botones para que modifiquen el contenido de la tabla dependiendo de la opción que se seleccione
![image](https://github.com/user-attachments/assets/0d7154ce-9c76-4714-87c3-f8b16a65bff6)

Resultados
![image](https://github.com/user-attachments/assets/cab253a5-b18b-4d96-b182-12f086ea9941)
![image](https://github.com/user-attachments/assets/530a7d34-39fb-4d0f-be9f-f43eed44385d)
![image](https://github.com/user-attachments/assets/6f670706-e9a9-4475-9c4a-23d343732ada)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
