class ClipSerializer < ActiveModel::Serializer
  attributes :id, :title, :tags

  def tags
    object.subject_list
  end

end
