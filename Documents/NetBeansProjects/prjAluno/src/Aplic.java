
import java.util.Scanner;

/**
 *
 * @author caste
 */
public class Aplic {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        Aluno objAluno = new Aluno();
        int opcao, numRa;
        double notP1, notP2, notT1, notT2;

        System.out.print("Digite o RA do aluno: ");
        numRa = entrada.nextInt();
        System.out.print("Digite a nota da 1a Prova: ");
        notP1 = entrada.nextDouble();
        System.out.print("Digite a nota da 2a Prova: ");
        notP2 = entrada.nextDouble();
        System.out.print("Digite a nota do 1o Trabalho: ");
        notT1 = entrada.nextDouble();
        System.out.print("Digite a nota do 2o Trabalho: ");
        notT2 = entrada.nextDouble();

        objAluno.setRa(numRa);
        objAluno.setNtPrv1(notP1);
        objAluno.setNtPrv2(notP2);
        objAluno.setNtTrab1(notT1);
        objAluno.setNtTrab2(notT2);
        
        do {
            System.out.println("\n\n1 - Exibir Nota das Provas/Trabalhos");
            System.out.println("2 - Exibir Média dos Trabalhos/Provas");
            System.out.println("3 - Exibir Média Final");
            System.out.println("4 - Sair");
            System.out.print("\n\n\t Digite a opcao: ");
            opcao = entrada.nextInt();
            
            switch (opcao) {
                case 1:                             //passagem de mensagens
                    System.out.println("\n\nRa: " + objAluno.getRa());
                    System.out.println("Nota 1a. Prova    : " + objAluno.getNtPrv1());
                    System.out.println("Nota 2a. Prova    : " + objAluno.getNtPrv2());
                    System.out.println("Nota 1o. Trabalho : " + objAluno.getNtTrab1());
                    System.out.println("Nota 2o. Trabalho : " + objAluno.getNtTrab2());
                    break;

                case 2:                             //passagem de mensagens
                    System.out.println("\n\nRa: " + objAluno.getRa());
                    System.out.println("Média dos Trabalhos: " + objAluno.calcMediaTrab());
                    System.out.println("Média das Provas  : " + objAluno.calcMediaProva());
                    break;

                case 3:                             //passagem de mensagens
                    System.out.println("\n\nRa: " + objAluno.getRa());
                    System.out.println("Média Final : " + objAluno.calcMediaFinal());
            }
        } while (opcao < 4);
    
    }
    
}
