package epicode.u5s3g4.esercizio2;

import java.util.ArrayList;
import java.util.List;

class Section implements Printable {
	private String title;
	private List<Printable> pages;

	public Section(String title) {
		this.title = title;
		this.pages = new ArrayList<>();
	}

	public void addPage(Printable page) {
		pages.add(page);
	}

	public void removePage(Printable page) {
		pages.remove(page);
	}

	public int getTotalPages() {
		int totalPages = 0;
		for (Printable page : pages) {
			if (page instanceof Page) {
				totalPages++;
			} else if (page instanceof Section) {
				totalPages += ((Section) page).getTotalPages();
			}
		}
		return totalPages;
	}

	@Override
	public void print() {
		System.out.println("Printing section: " + title);
		for (Printable page : pages) {
			page.print();
		}
	}
}
