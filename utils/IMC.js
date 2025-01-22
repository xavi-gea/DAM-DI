export default class IMC {

    static getIMCResult = (weight, height) => {

        const imc = this.calculateIMC(weight, height);

        let imcResult = {
            text:"",
            color:""
        };

        if (imc < 18.5) {
            
            imcResult.text = "peso insuficiente";
            imcResult.color = "green";

        }else if (imc >= 18.5 && imc < 25) {
            
            imcResult.text = "normopeso";
            imcResult.color = "green";

        }else if (imc >= 25 && imc < 27) {

            imcResult.text = "Sobrepeso grado I";
            imcResult.color = "green";

        }else if (imc >= 27 && imc < 30) {
            
            imcResult.text = "Sobrepeso grado II (preobesidad)";
            imcResult.color = "orange";

        }else if (imc >= 30 && imc < 35) {

            imcResult.text = "Obesidad de tipo I";
            imcResult.color = "orange";

        }else if (imc >= 35 && imc < 40) {

            imcResult.text = "Obesidad de tipo II";
            imcResult.color = "orange";

        }else if (imc >= 40 && imc < 50) {

            imcResult.text = "Obesidad de tipo III (mórbida)";
            imcResult.color = "red";

        }else{

            imcResult.text = "Obesidad de tipo IV (extrema)";
            imcResult.color = "red";
        }

        return imcResult;
    }

    static calculateIMC = (weight, height) => {       

        return weight / Math.pow(height,2);
    }
}