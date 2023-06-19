package epicode.u5s3g4.esercizio2;

class Page implements Printable {
	private String content;

	public Page(String content) {
		this.content = content;
	}

	@Override
	public void print() {
		System.out.println("Printing page: " + content);
	}
}