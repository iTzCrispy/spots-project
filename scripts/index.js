const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add(".modal_is-opened ");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  editProfileModal.classList.remove("modal__is-opened");
});

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newImageInput = newPostModal.querySelector("#card-image-input");
const newCaptionInput = newPostModal.querySelector("#card-caption-input");

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");
});

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description",
);

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal__is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

const newImageElement = document.querySelector("#card-image-input");
const newCaptionElement = document.querySelector("#card-caption-input");

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  const imageUrl = newImageInput.value;
  const caption = newCaptionInput.value;

  console.log(newImageInput);
  console.log(newCaptionInput);

  newPostModal.classList.remove("modal__is-opened");
}

newPostForm.addEventListener("submit", handleNewPostSubmit);
