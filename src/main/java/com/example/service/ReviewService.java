package com.example.service;

import com.example.domain.Review;

import java.util.List;

public interface ReviewService {

    List<Review> getReviewsByPerfumeId(Long perfumeId);

    Review addReviewToPerfume(Review review, Long perfumeId);
}
