json.array!(@clips) do |clip|
  json.extract! clip, :id, :title, :path
  json.url clip_url(clip, format: :json)
end
