package com.example.koob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;

    @GetMapping("/livros")
    public List<Livro> getLivros(@RequestParam(required = false) String query) {
        List<Livro> livros = livroRepository.findAll();
        if (query != null) {
            return livros.stream()
                    .filter(livro -> livro.getTitulo().toLowerCase().contains(query.toLowerCase()))
                    .collect(Collectors.toList());
        }
        return livros;
    }
}