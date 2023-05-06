public class Nodo {
    int valor;
    Nodo siguiente;
    Nodo anterior;

    public Nodo(int valor) {
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null;
    }
}

public class ListaCircularDoblementeEnlazada {
    Nodo cabeza;
    Nodo cola;

    public ListaCircularDoblementeEnlazada() {
        this.cabeza = null;
        this.cola = null;
    }

    // Método para agregar un elemento al final de la lista
    public void agregar(int valor) {
        Nodo nuevoNodo = new Nodo(valor);

        if (cabeza == null) {
            cabeza = nuevoNodo;
            cola = nuevoNodo;
            cabeza.siguiente = cabeza;
            cabeza.anterior = cabeza;
        } else {
            nuevoNodo.anterior = cola;
            nuevoNodo.siguiente = cabeza;
            cola.siguiente = nuevoNodo;
            cabeza.anterior = nuevoNodo;
            cola = nuevoNodo;
        }
    }

    // Método para imprimir los elementos de la lista
    public void imprimir() {
        if (cabeza == null) {
            System.out.println("La lista está vacía.");
            return;
        }

        Nodo actual = cabeza;
        do {
            System.out.print(actual.valor + " ");
            actual = actual.siguiente;
        } while (actual != cabeza);
        System.out.println();
    }
}
public static void main(String[] args) {
        // Crear una nueva lista circular doblemente enlazada
        ListaCircularDoblementeEnlazada lista = new ListaCircularDoblementeEnlazada();

        // Agregar elementos a la lista
        lista.agregar(1);
        lista.agregar(2);
        lista.agregar(3);
        lista.agregar(4);

        // Imprimir los elementos de la lista
        System.out.println("Elementos de la lista:");
        lista.imprimir();
    }