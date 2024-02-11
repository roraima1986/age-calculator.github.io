document.addEventListener('DOMContentLoaded', () => {
    
    // Declarar variable del boton y darle una accion
    const btnCalculate = document.querySelector('.form__btn')   
    
    btnCalculate.addEventListener('click', () => {

        // Variables de inputs
        const inputDay = document.querySelector('#input-day') 
        const inputMonth = document.querySelector('#input-month')
        const inputYear = document.querySelector('#input-year')
        
        // Variables de labels
        const labelDay = document.querySelector('#label-day')
        const labelMonth = document.querySelector('#label-month')
        const labelYear = document.querySelector('#label-year')

        
        // Variables de msgErrors        
        const msgErrorDay = document.querySelector('#error-day')
        const msgErrorMonth = document.querySelector('#error-month')
        const msgErrorYear = document.querySelector('#error-year')   

        
        // Variables de Resultados         
        const resultDay = document.querySelector('#result-day')
        const resultMonths = document.querySelector('#result-months')
        const resultYears = document.querySelector('#result-years')

        
        // Variables para dia, mes y año actual
        let  today = new Date()
        const day = today.getDate()
        const  month = today.getMonth() + 1
        const year = today.getFullYear()
        
        
        // Funcion para mostrar estilos de error
        const showStylesError = (label, input, msg, msgError, result) => {            
            label.style.color = 'var(--color-red)'
            input.style.border = '1px solid var(--color-red)'
            msg.innerHTML = msgError
            result.textContent = '--'
        }

        // Funcion para ocultar estilos de error
        const hideStylesError = (label, input, msg) => {            
            label.style.color = 'var(--color-gray)'
            input.style.border = '1px solid var(--color-light-gray)'
            msg.innerHTML = ''
        }

               
        // Validaciones para dia 
        if(!inputDay.value) {  
            showStylesError(labelDay, inputDay, msgErrorDay, 'This field is required', resultDay) 
        } else if(inputDay.value < 1 ||  inputDay.value > 31) {
            showStylesError(labelDay, inputDay, msgErrorDay, 'Must be a valid day', resultDay) 
        } else {
            hideStylesError(labelDay, inputDay, msgErrorDay)            
        }

        
        // Validaciones para mes 
        if(!inputMonth.value) {   
            showStylesError(labelMonth, inputMonth, msgErrorMonth, 'This field is required', resultMonths)             
        } else if(inputMonth.value < 1 || inputMonth.value > 12) {
            showStylesError(labelMonth, inputMonth, msgErrorMonth, 'Must be a valid month', resultMonths)
        } else {
            hideStylesError(labelMonth, inputMonth, msgErrorMonth)
        }    

        
        // Validaciones mes y año 
        if(inputMonth.value == 2 && inputDay.value > 29){
            showStylesError(labelDay, inputDay, msgErrorDay, 'Must be a valid day', resultDay)
        }  else if(inputDay.value > 30 && (inputMonth.value == 4 || inputMonth.value == 6 || inputMonth.value == 9 || inputMonth.value == 11)) {
            showStylesError(labelDay, inputDay, msgErrorDay, 'Must be a valid day', resultDay)
        }               

        // Validaciones para year 
        if(!inputYear.value) {
            showStylesError(labelYear, inputYear, msgErrorYear, 'This field is required', resultYears)            
        } else if(inputYear.value < 0) {
            showStylesError(labelYear, inputYear, msgErrorYear, 'Year must be greater than 0', resultYears)
        } else if (inputYear.value > year) {
            showStylesError(labelYear, inputYear, msgErrorYear, 'Must be in the past', resultYears)
        } else {
            hideStylesError(labelYear, inputYear, msgErrorYear)
        }   
        
        // Calcular edad        
        if (inputDay.value && inputMonth.value && inputYear.value) {
            const yearCalculated = (year - inputYear.value)
            const monthCalculated = (month - inputMonth.value)
            const dayCalculated = (day - inputDay.value)
            
            resultYears.innerHTML = `${yearCalculated}`
            resultMonths.innerHTML = `${monthCalculated}`
            resultDay.innerHTML =  `${dayCalculated}`              
        } else {
            resultYears.innerHTML = `--`
            resultMonths.innerHTML = `--`
            resultDay.innerHTML =  `--`    
        }
        
    });
})