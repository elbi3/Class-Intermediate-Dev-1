import express from 'express';
import createError from 'http-errors';
const router = express.Router();
const BASE_URL = "https://dogapi.dog/api/v2";

router.get('/breeds', async function(req, res, next) {
  try {
    const response = await fetch(`${BASE_URL}/breeds`);

    if (!response.ok) {
      return next(
        createError(response.status, "Failed to fetch breeds from API")
      );
    }

    const data = await response.json();
    console.log("Breeds fetched:", data.data.length);

    // res.json(data);
    res.render("breeds", { breeds: data.data});

  } catch (error) {
    next(createError(500, "Dog API unavailable"));
  }
});

router.get("/breeds/:id", async (req, res, next) => {
  try {
    const response = await fetch(`${BASE_URL}/breeds/${req.params.id}`);

    
    if (response.status === 404) {
      return next(createError(404, "Breed not found"));
    }

    if (!response.ok) {
      return next(
        createError(response.status, "Failed to fetch breed details")
      );
    }

    const data = await response.json();

    if (!data.data) {
      return next(createError(404, "Breed data missing"));
    }

    console.log("List of dog breeds: ", data);
    // res.json(data);
    res.render("breed-details", { breed: data.data.attributes });

  } catch (err) {
    next(createError(500, "Dog API unavailable"));
  }
});

// GET /facts
router.get("/facts", async (req, res, next) => {
  try {
    const response = await fetch(`${BASE_URL}/facts?limit=3`);

    if (!response.ok) {
      return next(
        createError(response.status, "Failed to fetch dog facts")
      );
    }

    const data = await response.json();

    res.render("facts", { facts: data.data });

  } catch (err) {
    next(createError(500, "Dog API unavailable"));
  }
});


// GET /groups
router.get("/groups", async (req, res, next) => {
  try {
    const response = await fetch(`${BASE_URL}/groups`);

    if (!response.ok) {
      return next(
        createError(response.status, "Failed to fetch dog groups")
      );
    }

    const data = await response.json();

    res.render("groups", { groups: data.data });

  } catch (err) {
    next(createError(500, "Dog API unavailable"));
  }
});

export default router;