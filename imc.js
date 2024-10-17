import java.util.Scanner;

public class CalculadoraIMC {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar peso ao usuário
        System.out.print("Digite seu peso em kg: ");
        double peso = scanner.nextDouble();

        // Solicitar altura ao usuário
        System.out.print("Digite sua altura em metros: ");
        double altura = scanner.nextDouble();

        // Calcular o IMC
        double imc = peso / (altura * altura);

        // Exibir o resultado
        System.out.printf("Seu IMC é: %.2f%n", imc);

        // Classificação do IMC
        if (imc < 18.5) {
            System.out.println("Classificação: Abaixo do peso");
        } else if (imc < 24.9) {
            System.out.println("Classificação: Peso normal");
        } else if (imc < 29.9) {
            System.out.println("Classificação: Sobrepeso");
        } else {
            System.out.println("Classificação: Obesidade");
        }

        scanner.close();
    }
}
