/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export { anime } from './models/anime';
export type { anime_characters } from './models/anime_characters';
export type { anime_episode } from './models/anime_episode';
export type { anime_episodes } from './models/anime_episodes';
export { anime_full } from './models/anime_full';
export type { anime_images } from './models/anime_images';
export type { anime_meta } from './models/anime_meta';
export type { anime_news } from './models/anime_news';
export type { anime_relations } from './models/anime_relations';
export type { anime_review } from './models/anime_review';
export type { anime_reviews } from './models/anime_reviews';
export type { anime_search } from './models/anime_search';
export { anime_search_query_orderby } from './models/anime_search_query_orderby';
export { anime_search_query_rating } from './models/anime_search_query_rating';
export { anime_search_query_status } from './models/anime_search_query_status';
export { anime_search_query_type } from './models/anime_search_query_type';
export type { anime_staff } from './models/anime_staff';
export type { anime_statistics } from './models/anime_statistics';
export type { anime_themes } from './models/anime_themes';
export type { anime_userupdates } from './models/anime_userupdates';
export type { anime_videos } from './models/anime_videos';
export type { anime_videos_episodes } from './models/anime_videos_episodes';
export type { broadcast } from './models/broadcast';
export type { character } from './models/character';
export type { character_anime } from './models/character_anime';
export type { character_full } from './models/character_full';
export type { character_images } from './models/character_images';
export type { character_manga } from './models/character_manga';
export type { character_meta } from './models/character_meta';
export type { character_pictures } from './models/character_pictures';
export type { character_voice_actors } from './models/character_voice_actors';
export type { characters_search } from './models/characters_search';
export { characters_search_query_orderby } from './models/characters_search_query_orderby';
export { club } from './models/club';
export type { club_member } from './models/club_member';
export type { club_relations } from './models/club_relations';
export { club_search_query_category } from './models/club_search_query_category';
export { club_search_query_orderby } from './models/club_search_query_orderby';
export { club_search_query_type } from './models/club_search_query_type';
export type { club_staff } from './models/club_staff';
export type { clubs_search } from './models/clubs_search';
export type { common_images } from './models/common_images';
export type { daterange } from './models/daterange';
export type { entry_meta } from './models/entry_meta';
export type { entry_recommendations } from './models/entry_recommendations';
export type { external_links } from './models/external_links';
export type { forum } from './models/forum';
export type { genre } from './models/genre';
export { genre_query_filter } from './models/genre_query_filter';
export type { genres } from './models/genres';
export type { history } from './models/history';
export type { magazine } from './models/magazine';
export type { magazines } from './models/magazines';
export { magazines_query_orderby } from './models/magazines_query_orderby';
export type { mal_url } from './models/mal_url';
export type { mal_url_2 } from './models/mal_url_2';
export { manga } from './models/manga';
export type { manga_characters } from './models/manga_characters';
export { manga_full } from './models/manga_full';
export type { manga_images } from './models/manga_images';
export type { manga_meta } from './models/manga_meta';
export type { manga_news } from './models/manga_news';
export type { manga_pictures } from './models/manga_pictures';
export type { manga_review } from './models/manga_review';
export type { manga_reviews } from './models/manga_reviews';
export type { manga_search } from './models/manga_search';
export { manga_search_query_orderby } from './models/manga_search_query_orderby';
export { manga_search_query_status } from './models/manga_search_query_status';
export { manga_search_query_type } from './models/manga_search_query_type';
export type { manga_statistics } from './models/manga_statistics';
export type { manga_userupdates } from './models/manga_userupdates';
export type { moreinfo } from './models/moreinfo';
export type { news } from './models/news';
export type { pagination } from './models/pagination';
export type { pagination_plus } from './models/pagination_plus';
export type { people_images } from './models/people_images';
export type { people_search } from './models/people_search';
export { people_search_query_orderby } from './models/people_search_query_orderby';
export type { person } from './models/person';
export type { person_anime } from './models/person_anime';
export type { person_full } from './models/person_full';
export type { person_manga } from './models/person_manga';
export type { person_meta } from './models/person_meta';
export type { person_pictures } from './models/person_pictures';
export type { person_voice_acting_roles } from './models/person_voice_acting_roles';
export type { pictures } from './models/pictures';
export type { pictures_variants } from './models/pictures_variants';
export type { producer } from './models/producer';
export type { producer_full } from './models/producer_full';
export type { producers } from './models/producers';
export { producers_query_orderby } from './models/producers_query_orderby';
export type { random } from './models/random';
export type { recommendations } from './models/recommendations';
export type { relation } from './models/relation';
export type { reviews_collection } from './models/reviews_collection';
export type { schedules } from './models/schedules';
export { search_query_sort } from './models/search_query_sort';
export type { seasons } from './models/seasons';
export type { streaming_links } from './models/streaming_links';
export type { trailer } from './models/trailer';
export type { trailer_base } from './models/trailer_base';
export type { trailer_images } from './models/trailer_images';
export type { user_about } from './models/user_about';
export type { user_by_id } from './models/user_by_id';
export type { user_clubs } from './models/user_clubs';
export type { user_favorites } from './models/user_favorites';
export type { user_friends } from './models/user_friends';
export type { user_history } from './models/user_history';
export type { user_images } from './models/user_images';
export type { user_meta } from './models/user_meta';
export type { user_profile } from './models/user_profile';
export type { user_profile_full } from './models/user_profile_full';
export type { user_statistics } from './models/user_statistics';
export type { user_updates } from './models/user_updates';
export type { users_search } from './models/users_search';
export { users_search_query_gender } from './models/users_search_query_gender';
export type { users_temp } from './models/users_temp';
export type { watch_episodes } from './models/watch_episodes';
export type { watch_promos } from './models/watch_promos';
