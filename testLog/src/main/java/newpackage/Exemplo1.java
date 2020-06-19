package newpackage;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;
  
public class Exemplo1 {
  
  public static void main(String[] args) throws FileNotFoundException, IOException {
    Scanner ler = new Scanner(System.in);
  
    System.out.printf("Informe o nome de um arquivo ou diretório:\n");
    String nome = ler.nextLine();
  
    FileOutputStream arq = new FileOutputStream("d:\\datfile.dat");
    DataOutputStream gravarArq = new DataOutputStream(arq);
    

    File objFile = new File(nome);
    if (objFile.exists()) {
       if (objFile.isFile()) {
          System.out.printf("\nArquivo (%s) existe - tamanho: %d bytes\n",
            objFile.getName(),  objFile.length());
       }
       else {
         System.out.printf("\nConteúdo do diretório:\n");
         String diretorio[] = objFile.list();
         for (String item: diretorio) {
           System.out.printf("%s\n", item);
           gravarArq.writeBytes(item + "\n");
           
         }
       }
    arq.close();
    } else System.out.printf("Erro: arquivo ou diretório informado não existe!\n");
  }
}