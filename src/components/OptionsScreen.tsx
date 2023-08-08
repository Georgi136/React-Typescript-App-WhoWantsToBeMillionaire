import { useCallback, useEffect, useState } from "react";
import { Category, DIFFICULTY_SEARCH_PARAM, Difficulty } from "../constants.ts/options";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { EMPTY_STRING } from "../constants.ts/defaults";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CATEGORY_SEARCH_PARAM } from "../constants.ts/options";
import { getCategoryIdFromSelectedCategory } from "../utilts";
import "../styles/categories.styles.css"
import "../styles/options.styles.css"

export const OptionsScreen = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get(CATEGORY_SEARCH_PARAM) ?? EMPTY_STRING;
  const selectedDifficulty = searchParams.get(DIFFICULTY_SEARCH_PARAM) ?? EMPTY_STRING;

  const fetchCategories = useCallback(async () => {
    const response = await fetch("https://opentdb.com/api_category.php");
    const jsonCategories = await response.json();

    const responseCategories = jsonCategories?.["trivia_categories"];
    if (responseCategories) {
      setCategories(responseCategories);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleContinue =()=>{
    if(!selectedCategory || !selectedDifficulty){
      alert('choose categiry or difficulty');
    }
    else{
      navigate(`/questions?category=${getCategoryIdFromSelectedCategory(categories, selectedCategory)}&difficulty=${selectedDifficulty.toLocaleLowerCase()}`)
    }
  }

  return (
    <div className="options-container">
      <div>
        <Dropdown
          value={selectedCategory}
          onChange={(e) => {
            searchParams.set(CATEGORY_SEARCH_PARAM, e.value);
            setSearchParams(searchParams);
          }}
          options={categories.map((x) => x.name)}
          placeholder="Select a Category"
          className="option-dropdown"
        />
      </div>
      <div>
        <Dropdown
          value={selectedDifficulty}
          onChange={(e) => {
            searchParams.set(DIFFICULTY_SEARCH_PARAM, e.value);
            setSearchParams(searchParams);
          }}
          options={Object.keys(Difficulty)}
          placeholder="Select a Difficulty"
          className="option-dropdown"
        />
      </div>
      <div className="continue-btn-container">
      <Button label="Continue" onClick={() => {handleContinue()}}/>
      </div>
    </div>
  );
};
