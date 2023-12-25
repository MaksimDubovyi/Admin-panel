export type OptionId = string | number

export interface IOption {
  id: OptionId
  label: string
}

export interface ProfileOption extends IOption {
  slug: string
  children?: ProfileOption[]
}

export type ProfileOptions = ProfileOption[]
