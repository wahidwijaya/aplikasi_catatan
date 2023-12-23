let array_notes = [
    {
        id: 1,
        title: "Panduan Belajar React",
        description: "Materi dasar dan lanjutan tentang React",
        createdAt: "07-01-2023"
    },
    {
        id: 2,
        title: "Node.js for Beginners",
        description: "Memahami dasar-dasar Node.js",
        createdAt: "08-02-2023"
    },
    {
        id: 3,
        title: "Desain Antarmuka Pengguna",
        description: "Teknik-teknik desain UI/UX yang efektif",
        createdAt: "09-10-2023"
    },
    {
        id: 4,
        title: "Belajar JavaScript ES6+",
        description: "Fitur-fitur baru dalam JavaScript",
        createdAt: "10-11-2023"
    },
    {
        id: 5,
        title: "Mengenal Git dan GitHub",
        description: "Praktik menggunakan Git dalam pengembangan perangkat lunak",
        createdAt: "11-11-2023"
    },
    {
        id: 6,
        title: "Pengenalan MongoDB",
        description: "Dasar-dasar penggunaan MongoDB dalam pengembangan web",
        createdAt: "12-12-2023"
    }
  ];
  
  function addNotes(note) {
    array_notes = [...array_notes, note];
  }

  function getNotes() {
    return array_notes;
  }
  
  function deleteNotes(deleted_id) {
    array_notes = array_notes.filter((note, index) => note.id !== deleted_id);
  }
  
  export { addNotes, getNotes, deleteNotes };