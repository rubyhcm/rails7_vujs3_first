10.times do
  Todo.find_or_create_by!(
    title: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4),
    completed: Faker::Boolean.boolean
  )
end
