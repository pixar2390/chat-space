class CreateMesseges < ActiveRecord::Migration[5.0]
  def change
    create_table :messeges do |t|

      t.timestamps
    end
  end
end
