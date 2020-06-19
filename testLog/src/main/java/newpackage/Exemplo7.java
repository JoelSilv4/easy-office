/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package newpackage;

/**
 *
 * @author Zed
 */
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
  
public class Exemplo7 {
  
  public static void main(String[] args) throws IOException {
    String nome, sit;
    double nota1, nota2, media;
  
    try {
      RandomAccessFile diario = new RandomAccessFile("d:\\diario.dat", "r");
  
      System.out.printf("Reg Nome................ 1aNota 2aNota Média. Situação.\n");
      System.out.printf("-------------------------------------------------------\n");
      int i;
      long n = (diario.length() / 56); // calcula o número de registros do arquivo (sizefile)
      for (i=1; i<=n; i++) {
        nome = lerString(diario, 20);
        nota1 = diario.readDouble();
        nota2 = diario.readDouble();
        media = (nota1 + nota2) / 2;
        sit = (media >= 6.0 ? "aprovado" : "reprovado");
        System.out.printf("%3d %20s %6.2f %6.2f %6.2f %s\n", i, nome, nota1, nota2, media, sit);
      }
      System.out.printf("-------------------------------------------------------\n");
      diario.close();
    } catch (FileNotFoundException e) {
        System.err.printf("Arquivo não encontrado: %s.\n", e.getMessage());
    }
  }
  
  private static String lerString(RandomAccessFile arq, int tam) throws IOException {
    char result[] = new char[tam];
    for (int i=0; i<tam; i++) {
      result[i] = arq.readChar();
    }
    return(new String(result).replace('\0', ' '));
  }
}
