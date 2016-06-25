'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            $scope.showMenu = false;
            $scope.message = "Loading ...";

            menuFactory.getDishes().query(
                function(response){
                    $scope.dishes = response;
                    $scope.showMenu = true;
                    $scope.message = "Loading ...";
                }, 
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                    $scope.showMenu = false;
                }
            );

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope','feedbackFactory', function($scope, feedbackFactory) {
            
            $scope.sendFeedback = function() {
                
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                }
                else {
                    feedbackFactory.getFeedbacks().save($scope.feedback);
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            
            $scope.showMenu = false;
            $scope.message = "Loading ...";
            
            $scope.dish =  menuFactory.getDishes().get(
                {id:parseInt($stateParams.id,10)},
                function(response){
                    $scope.dishes = response;
                    $scope.showMenu = true;
                    $scope.message = "Loading ...";
                }, 
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                    $scope.showMenu = false;
                }
            );
            
        }])

        .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            $scope.submitComment = function () {
                $scope.mycomment.date = new Date().toISOString();
                $scope.mycomment.rating = parseInt( $scope.mycomment.rating,10); 
                $scope.dish.comments.push($scope.mycomment);
                menuFactory.getDishes().update({id:$scope.dish.id}, $scope.dish);
                $scope.commentForm.$setPristine();                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }
        }])

        .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory){
            $scope.leaderMessage = "Loading ...";
            $scope.showLeader = false;
            
            corporateFactory.getLeaders().query(
                function(response){
                    $scope.leaders = response;
                    $scope.showLeader = true;
                    $scope.leaderMessage = "Loading ...";
                }, 
                function(response){
                    $scope.leaderMessage = "Error: " + response.status + " " + response.statusText;
                    $scope.showLeader = false;
                } 
            );
        }])

        // implement the IndexController and About Controller here
        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory){
            
            $scope.showMenu = false;
            $scope.showPromotion = false;
            $scope.showLeader = false;
            $scope.message = "Loading ...";
            $scope.promoMessage = "Loading ...";
            $scope.leaderMessage = "Loading ...";
            
            menuFactory.getDishes().get(
                {id:0},
                function(response){
                    $scope.featured = response;
                    $scope.showMenu = true;
                    $scope.message = "Loading ...";
                }, 
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                    $scope.showMenu = false;
                }
            );
            
            menuFactory.getPromotions().get(
                {id:0},
                function(response){
                    $scope.promotion = response;
                    $scope.showPromotion = true;
                    $scope.promoMessage = "Loading ...";
                }, 
                function(response){
                    $scope.promoMessage = "Error: " + response.status + " " + response.statusText;
                    $scope.showPromotion = false;
                }
            );
            
            corporateFactory.getLeaders().get(
                {id:3},
                function(response){
                    $scope.chef = response;
                    $scope.showLeader = true;
                    $scope.leaderMessage = "Loading ...";
                }, 
                function(response){
                    $scope.leaderMessage = "Error: " + response.status + " " + response.statusText;
                    $scope.showLeader = false;
                }
            );
        }])
;
