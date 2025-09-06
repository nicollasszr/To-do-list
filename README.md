# To-do List

## 📌 Sobre o Projeto

Este projeto é uma aplicação **Todo List** que permite:

* Criar tarefas com **título** e **descrição**;
* Visualizar as tarefas criadas em cartões;
* Marcar tarefas como concluídas (riscando o texto);
* Deletar tarefas da lista.

⚠️ **Observação:** não há persistência de dados. Ao atualizar a página, as tarefas são perdidas.

---

## 🚀 Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite**
* **TailwindCSS**
* **Git & GitHub** (versionamento e hospedagem)

---

## 🏗️ Estrutura de Componentes

Atualmente, a aplicação possui dois níveis de organização:

* **App.tsx** → Componente principal.

  * Contém o formulário para criar novas tarefas;
  * Gerencia a lista de tarefas;
  * Renderiza os **Cards** passando os dados via props.

* **Card.tsx** → Componente de apresentação.

  * Recebe uma `task` como prop e exibe título + descrição;
  * Permite marcar como concluída (risca o texto);
  * Contém o botão de exclusão, que dispara a função recebida por props.

A comunicação entre `App` e `Card` é feita por **props**, enviando tanto os objetos de `task` quanto a função `deleteTask`.

---

## ⚡ Gerenciamento de Estado (useState)

A aplicação utiliza **4 estados** com `useState`:

* **No App.tsx**

  * `title` → armazena o valor digitado no input de título;
  * `description` → armazena o valor digitado no input de descrição;
  * `taskList` → array de tarefas, atualizado dinamicamente.

```tsx
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [taskList, setTaskList] = useState<Task[]>([]);
```

* **No Card.tsx**

  * `isDeleted` (ou equivalente) → controla se a tarefa está concluída ou não.

```tsx
const [isCompleted, setIsCompleted] = useState(false);
```

---

## 🛡️ Tipagem com TypeScript

A tipagem foi utilizada para garantir maior segurança no fluxo de dados.

### Tipo de uma tarefa:

```ts
interface Task {
  id: number;
  title: string;
  description: string;
}
```

### Tipo das props do Card:

```ts
interface CardProps {
  task: Task;
  deleteTask: (id: number) => void;
}

function Card({ task, deleteTask }: CardProps) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Excluir</button>
    </div>
  );
}
```

* O `id` foi definido como `number` para facilitar o gerenciamento das tarefas.
* `title` e `description` são `string`, já que são exibidos como texto.

---