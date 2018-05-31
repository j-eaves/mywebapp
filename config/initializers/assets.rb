# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
#I added the final two lines to enable projects/index.html.erb to call the js files
Rails.application.config.assets.precompile += %w( jquery.min.js bootstrap.bundle.min.js)
#The following lines didn't work. I had to move the bootstrap.bundle.min.js file to the app/assets/javascripts file
# Rails.application.config.assets.precompile += %w( bootstrap.bundle.min.js )
# Rails.application.config.assets.precompile += %w( vendor/assets/javascripts/bootstrap/js/bootstrap.bundle.min.js )
