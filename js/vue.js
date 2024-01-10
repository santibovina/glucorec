const { createApp } = Vue
createApp({
    data() {
        return {
            components: {
                'footer' : `<p>Desarrollado por <a href="https://www.linkedin.com/in/santiagobovina" target="_blank">Santiago Bovina</a></p>`
            }
        }
    }
}).mount('#principal__principal-footer')