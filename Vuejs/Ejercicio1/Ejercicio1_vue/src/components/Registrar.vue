
<script>
import Login from './Login.vue';
export default {
    components: {
        Login
    },
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        submitForm() {
            // Aquí puedes manejar el envío del formulario
            console.log('Correo:', this.email);
            console.log('Contraseña:', this.password);
        }
    }
};
</script>

<template>
    

<Login></Login>
</template>

<style scoped>


form {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

div {
    margin-bottom: 1em;
}

label {
    margin-bottom: .5em;
    color: #333333;
    display: block;
}

input {
    border: 1px solid #CCCCCC;
    padding: .5em;
    font-size: 1em;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
}

button {
    padding: 0.7em;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}

button:hover {
    background-color: #0056b3;
}

</style>
