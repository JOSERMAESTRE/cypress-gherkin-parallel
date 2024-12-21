# ID: TC001
Feature: Registro de usuario
    Como usuario del sistema
    Quiero registrar una nueva cuenta
    Para poder acceder a todas las funcionalidades de la plataforma

    Background:
        Given el usuario está en la página de registro

    Scenario Outline: Registro exitoso de un usuario
        When el usuario ingresa su información:
            | Género   | Nombre   | Apellido   | Email   | Contraseña   | Confirmar Contraseña   |
            | <género> | <nombre> | <apellido> | <email> | <contraseña> | <confirmar_contraseña> |
        And el usuario hace clic en el botón "register"
        Then el sistema muestra un mensaje de éxito "User Registered Sucessfully"

        Examples:
            | género | nombre | apellido | email            | contraseña | confirmar_contraseña |
            | Male   | jose   | maestre  | joserm@gmail.com | 123456     | 123456               |