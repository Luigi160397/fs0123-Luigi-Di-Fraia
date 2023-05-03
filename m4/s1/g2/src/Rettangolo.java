
public class Rettangolo {
	double altezza;
	double larghezza;
	
	public Rettangolo (double h, double l) {
		this.altezza = h;
		this.larghezza = l;
	}
	
	public double perimetro () {
		return (this.altezza*2)+(this.larghezza*2);
	}
	
	public double area () {
		return this.altezza * this.larghezza;
	}
	
	
}
