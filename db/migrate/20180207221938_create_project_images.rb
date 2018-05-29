class CreateProjectImages < ActiveRecord::Migration[5.1]
  def change
    create_table :project_images do |t|
      t.integer :project_id
      t.string :name
      t.string :caption
      t.string :url

      t.timestamps
    end
  end
end
