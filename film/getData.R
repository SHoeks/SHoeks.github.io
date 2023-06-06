library(httr)
library(jsonlite)
library(glue)
library(stringr)

# set album id
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
album_id = "72177720308871644"
key = "cb93bec605e4ab52dfd938123758030e" # api key
user_id = "192333535@N02"

removeCharacters = function(str){
  str = str_replace_all(str, "[[:punct:]]", "")
  str = str_replace_all(str," ","_")
  str = str_to_lower(str)
  return(str)
}

getAlbumPhotos = function(API_KEY,USER_ID,ALBUM_ID){ 
  entry = "https://api.flickr.com/services/rest/?"
  method = "flickr.photosets.getPhotos"
  url = glue("{entry}method={method}&photoset_id={ALBUM_ID}&user_id={USER_ID}&format=json&nojsoncallback=1&api_key={API_KEY}")
  call = GET(url)
  res = fromJSON(rawToChar(call$content))
  return(res)
}

getPhotoInfo = function(API_KEY,PHOTO_ID) { 
  entry = "https://api.flickr.com/services/rest/?"
  method = "flickr.photos.getInfo"
  url = glue("{entry}method={method}&photo_id={PHOTO_ID}&format=json&nojsoncallback=1&api_key={API_KEY}")
  call = GET(url)
  res = fromJSON(rawToChar(call$content))
  return(res)
}

getPhotoSizeAndURLs = function(API_KEY,PHOTO_ID) { 
  entry = "https://api.flickr.com/services/rest/?"
  method = "flickr.photos.getSizes"
  url = glue("{entry}method={method}&photo_id={PHOTO_ID}&format=json&nojsoncallback=1&api_key={API_KEY}")
  call = GET(url)
  res = fromJSON(rawToChar(call$content))
  return(res$sizes$size)
}

albumPhotos = getAlbumPhotos(key,user_id,album_id)
albumPhotos$photoset$photo

getPhotoInfo(key,albumPhotos$photoset$photo$id[1])
getPhotoSizeAndURLs(key,albumPhotos$photoset$photo$id[1])

dataPhotos = list()
for(i in 1:nrow(albumPhotos$photoset$photo)){
  dataPhotos[[i]] = list()
  dataPhotos[[i]]$pid = albumPhotos$photoset$photo$id[i]
  photoSizes = getPhotoSizeAndURLs(key,albumPhotos$photoset$photo$id[i])
  photoSizes = photoSizes[,c("source","width","height")]
  photoSizes = photoSizes[photoSizes$width>200,]
  rownames(photoSizes) = NULL
  dataPhotos[[i]]$sizes = photoSizes
}

banner_id = albumPhotos$photoset$primary
bannerPhoto = getPhotoSizeAndURLs(key,banner_id)
bannerPhoto = bannerPhoto[,c("source","width","height")]
bannerPhoto = bannerPhoto[bannerPhoto$width>200,]
rownames(bannerPhoto) = NULL

menuData = data.frame(title="main",url="../main.html")
menuData = rbind(menuData,data.frame(title="color",url="../color.html"))
menuData = rbind(menuData,data.frame(title="film",url="index.html"))

albumPhotosJSON = toJSON(dataPhotos)
bannerPhotoJSON = toJSON(bannerPhoto)
menuDataJSON = toJSON(menuData)

# write js data
data_name = "index" #removeCharacters(albumPhotos$photoset$title)
write("var AlbumData = ", file = glue("{data_name}.js"))
write(albumPhotosJSON, file = glue("{data_name}.js"), append = TRUE)
write(" ", file = glue("{data_name}.js"), append = TRUE)
write("var BannerData = ", file = glue("{data_name}.js"), append = TRUE)
write(bannerPhotoJSON, file = glue("{data_name}.js"), append = TRUE)
write(" ", file = glue("{data_name}.js"), append = TRUE)
write("var MenuData = ", file = glue("{data_name}.js"), append = TRUE)
write(menuDataJSON, file = glue("{data_name}.js"), append = TRUE)

# edit html template
tx = readLines("assets/template.html")
tx2 = gsub(pattern = "ADD_PAGE_DATA_HERE", replace = glue("{data_name}.js"), x = tx)
write(tx2, file = glue("{data_name}.html"))