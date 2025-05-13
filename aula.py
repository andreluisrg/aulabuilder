from abc import ABC, abstractmethod

class Report:
    def __init__(self):
        self.content = ""

    def add_content(self, content):
        self.content += content + "\n"

    def show(self):
        print(self.content)


class ReportBuilder(ABC):
    def __init__(self):
        self.report = Report()

    @abstractmethod
    def add_title(self, title):
        pass

    @abstractmethod
    def add_body(self, body):
        pass

    @abstractmethod
    def add_footer(self, footer):
        pass

    def get_report(self):
        return self.report


class HTMLReportBuilder(ReportBuilder):
    def add_title(self, title):
        self.report.add_content(f"<h1>{title}</h1>")

    def add_body(self, body):
        self.report.add_content(f"<p>{body}</p>")

    def add_footer(self, footer):
        self.report.add_content(f"<footer>{footer}</footer>")


class PDFReportBuilder(ReportBuilder):
    def add_title(self, title):
        self.report.add_content(f"[PDF Título]: {title}")

    def add_body(self, body):
        self.report.add_content(f"[PDF Corpo]: {body}")

    def add_footer(self, footer):
        self.report.add_content(f"[PDF Rodapé]: {footer}")


class CrystalReportBuilder(ReportBuilder):
    def add_title(self, title):
        self.report.add_content(f"Crystal Report - Título: {title}")

    def add_body(self, body):
        self.report.add_content(f"Crystal Report - Corpo: {body}")

    def add_footer(self, footer):
        self.report.add_content(f"Crystal Report - Rodapé: {footer}")



class ReportDirector:
    def __init__(self, builder: ReportBuilder):
        self.builder = builder

    def build_report(self, title, body, footer):
        self.builder.add_title(title)
        self.builder.add_body(body)
        self.builder.add_footer(footer)
        return self.builder.get_report()


def main():
    entrada = {
        "nome_arquivo": "cliente123.xml",
        "titulo": "Relatório do Cliente",
        "corpo": "Dados do cliente, histórico de compras, preferências...",
        "rodape": "CRM System © 2025"
    }

    print("Relatório em HTML:")
    director = ReportDirector(HTMLReportBuilder())
    html_report = director.build_report(entrada["titulo"], entrada["corpo"], entrada["rodape"])
    html_report.show()

    print("\nRelatório em PDF:")
    director = ReportDirector(PDFReportBuilder())
    pdf_report = director.build_report(entrada["titulo"], entrada["corpo"], entrada["rodape"])
    pdf_report.show()

    print("\nRelatório em Crystal Report:")
    director = ReportDirector(CrystalReportBuilder())
    crystal_report = director.build_report(entrada["titulo"], entrada["corpo"], entrada["rodape"])
    crystal_report.show()


if __name__ == "__main__":
    main()
