package esercizio2;

public class Main2 {

	public static void main(String[] args) {
		stampaInLettere(3);

	}
	
	public static void stampaInLettere (int num) {
		
	        switch (num) {
	            case 0:
	                System.out.println("zero");
	                break;
	            case 1:
	                System.out.println("uno");
	                break;
	            case 2:
	                System.out.println("due");
	                break;
	            case 3:
	                System.out.println("tre");
	                break;
	            default:
	            	System.out.println("Il numero deve essere compreso tra 0 e 3");
	            	break;
	        }
	    } 
	        
	  
	}


