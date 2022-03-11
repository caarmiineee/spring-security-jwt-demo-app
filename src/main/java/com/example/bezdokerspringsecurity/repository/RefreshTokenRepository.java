package com.example.bezdokerspringsecurity.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bezdokerspringsecurity.model.RefreshToken;
import com.example.bezdokerspringsecurity.model.User;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long>{

	@Override
    Optional<RefreshToken> findById(Long id);
	
    Optional<RefreshToken> findByToken(String token);

	Integer deleteByUser(Optional<User> findById);

}
