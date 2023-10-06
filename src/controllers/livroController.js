import livros from "../models/Livro.js";


class LivroController {

    static listarMangas = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static cadastarMangas = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar dados do manga` })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarManga = (req, res) => {
        let id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(201).send({ message: 'Manga atualizado com sucesso.' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });

    }

    static deletarManga = (req, res) => {
        let id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(201).send({ message: 'Manga deletado com sucesso.' });
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }
}

export default LivroController;