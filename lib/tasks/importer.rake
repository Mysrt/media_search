namespace :importer do

  task import_clips_from_images: :environment do

    puts "Importing Image Clips"
    images = Dir.glob Rails.root.join('app', 'assets', 'images', '*.jpg')

    images.each do |image_path|
      puts "importing: #{image_path}"
      exif_image = MiniExiftool.new(image_path)
      clip = Clip.new(title: exif_image.filename.split('/').last, path: image_path)
      clip.subject_list = exif_image.subject.join(', ')
      puts clip.save
    end
  end
end
