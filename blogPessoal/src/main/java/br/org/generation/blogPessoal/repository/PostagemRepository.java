package br.org.generation.blogPessoal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.blogPessoal.model.Postagem;

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long>{
	

}
