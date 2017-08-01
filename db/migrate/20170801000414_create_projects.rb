class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.date :date
      t.string :materials
      t.string :description

      t.timestamps
    end
  end
end
