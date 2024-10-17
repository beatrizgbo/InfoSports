import java.util.Scanner;

public class CalculadoraIMC {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean continuar = true;

        while (continuar) {
            double peso = obterPeso(scanner);
            double altura = obterAltura(scanner);
            double imc = calcularIMC(peso, altura);
            exibirResultado(imc);
            
            continuar = perguntarContinuar(scanner);
        }

        scanner.close();
    }

    private static double obterPeso(Scanner scanner) {
        double peso;
        while (true) {
            System.out.print("Digite seu peso em kg: ");
            if (scanner.hasNextDouble()) {
                peso = scanner.nextDouble();
                if (peso > 0) {
                    break;
                } else {
                    System.out.println("Peso deve ser positivo. Tente novamente.");
                }
            } else {
                System.out.println("Entrada inválida. Por favor, insira um número.");
                scanner.next(); // Limpa a entrada inválida
            }
        }
        return peso;
    }

    private static double obterAltura(Scanner scanner) {
        double altura;
        while (true) {
            System.out.print("Digite sua altura em metros: ");
            if (scanner.hasNextDouble()) {
                altura = scanner.nextDouble();
                if (altura > 0) {
                    break;
                } else {
                    System.out.println("Altura deve ser positiva. Tente novamente.");
                }
            } else {
                System.out.println("Entrada inválida. Por favor, insira um número.");
                scanner.next(); // Limpa a entrada inválida
            }
        }
        return altura;
    }

    private static double calcularIMC(double peso, double altura) {
        return peso / (altura * altura);
    }

    private static void exibirResultado(double imc) {
        System.out.printf("Seu IMC é: %.2f%n", imc);
        if (imc < 18.5) {
            System.out.println("Classificação: Abaixo do peso");
        } else if (imc < 24.9) {
            System.out.println("Classificação: Peso normal");
        } else if (imc < 29.9) {
            System.out.println("Classificação: Sobrepeso");
        } else {
            System.out.println("Classificação: Obesidade");
        }
    }

    private static boolean perguntarContinuar(Scanner scanner) {
        System.out.print("Deseja calcular novamente? (s/n): ");
        String resposta = scanner.next();
        return resposta.equalsIgnoreCase("s");
    }
}

