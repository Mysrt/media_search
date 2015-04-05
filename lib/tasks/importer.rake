namespace :importer do

  task import_clips_from_images: :environment do

    puts "Importing Image Clips"
    images = Dir.glob Rails.root.join('app', 'assets', 'images')

    binding.pry
  end
end
