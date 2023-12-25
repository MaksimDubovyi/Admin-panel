import { ProfileOptions } from './types'

export { GENRES } from './ArtGenres'
export { RELIGION } from './Religion'
export { VALUABLES } from './Valuables'
export { HOBBIES } from './Hobbies'

export const LANGUAGES: ProfileOptions = [
  { id: 0, slug: 'english', label: 'Английский' },
  { id: 1, slug: 'russian', label: 'Русский' },
  { id: 2, slug: 'ukrainian', label: 'Украинский' },
  { id: 3, slug: 'spanish', label: 'Испанский' },
  { id: 4, slug: 'chinese', label: 'Китайский' },
  { id: 5, slug: 'arabic', label: 'Арабский' },
]

export const EDUCATION: ProfileOptions = [
  { id: 0, slug: 'doctoral', label: 'Докторская' },
  { id: 1, slug: 'higher', label: 'Высшее' },
  { id: 2, slug: 'incompleteHigher', label: 'Не оконченное высшее' },
  { id: 3, slug: 'secondary', label: 'Среднее' },
  { id: 4, slug: 'noEducation', label: 'Без образования' },
]

export const FINANCIAL: ProfileOptions = [
  { id: 0, slug: 'bad', label: 'Все не очень' },
  { id: 1, slug: 'enoughForLiving', label: 'На жизнь хватает' },
  { id: 2, slug: 'moreAV', label: 'Выше среднего' },
  { id: 3, slug: 'good', label: 'Хорошо зарабатываю' },
  { id: 4, slug: 'rich', label: 'Богат(а)' },
]

export const ORIENTATION: ProfileOptions = [
  { id: 1, slug: 'hetero', label: 'Гетеро' },
  { id: 2, slug: 'bi', label: 'Би' },
  { id: 3, slug: 'homo', label: 'Гомо' },
  { id: 4, slug: 'otherOrientation', label: 'Другое' },
]
export const LGBT_TOLERANT: ProfileOptions = [
  { id: 1, slug: 'iSupportLGBT', label: 'Поддерживаю' },
  { id: 2, slug: 'lGBTIsNeutral', label: 'Нейтральное' },
  { id: 3, slug: 'againstLGBT', label: 'Негативное' },
]

export const GOALS: ProfileOptions = [
  { id: 1, slug: 'meetFriends', label: 'Дружба, друзья по интересам' },
  { id: 2, slug: 'meetLove', label: 'Любовь-брак' },
  {
    id: 3,
    slug: 'commercial',
    label: 'Отношения по расчету',
    children: [
      { id: 4, slug: 'beSponsor', label: 'Я спонсор' },
      { id: 5, slug: 'findSponsor', label: 'Ищу спонсора' },
    ],
  },
  { id: 6, slug: 'findBusinessPartners', label: 'Бизнес партнерство' },
  { id: 7, slug: 'sexyAdventures', label: 'Свободные отношения' },
]

export const RELATIONSHIP: ProfileOptions = [
  { id: 0, slug: 'married/Married', label: 'Замужем/Женат' },
  { id: 1, slug: 'inARelationship', label: 'В отношениях' },
  { id: 2, slug: 'single', label: 'Свободен' },
]

export const CHILDREN: ProfileOptions = [
  { id: 0, slug: 'haveChildren', label: 'Есть' },
  { id: 1, slug: 'NoChildrenButWant', label: 'Нет, но хочу' },
  { id: 2, slug: 'NoChildrenAndDoNotWantTo', label: 'Нет и не хочу' },
]

export const SEX: ProfileOptions = [
  { id: 'male', slug: 'man', label: 'Мужчина' },
  { id: 'female', slug: 'woman', label: 'Женщина' },
  { id: 'other', slug: 'otherGender', label: 'Другое' },
]

export const PETS: ProfileOptions = [
  { id: 0, slug: 'iLoveAnimalsIHave', label: 'Люблю животных, есть' },
  { id: 1, slug: 'ILoveButIDontHave', label: 'Люблю, но нету' },
  { id: 2, slug: 'IAmNeutral', label: 'Нейтрально отношусь' },
  { id: 3, slug: 'IDontLike', label: 'Не люблю' },
]
