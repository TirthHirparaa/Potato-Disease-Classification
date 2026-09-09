import React from 'react';

const ResultDisplay = ({ prediction }) => {
  const { class: diseaseClass, confidence } = prediction;
  
  const getDiseaseBadgeClass = (disease) => {
    switch (disease.toLowerCase()) {
      case 'healthy':
        return 'badge-healthy';
      case 'early blight':
        return 'badge-early-blight';
      case 'late blight':
        return 'badge-late-blight';
      default:
        return 'bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium';
    }
  };

  const getEmoji = (disease) => {
    switch (disease.toLowerCase()) {
      case 'healthy':
        return '✅';
      case 'early blight':
        return '⚠️';
      case 'late blight':
        return '🚨';
      default:
        return '🔍';
    }
  };

  const getRecommendation = (disease) => {
    switch (disease.toLowerCase()) {
      case 'healthy':
        return {
          english: 'Your potato leaves are healthy! Continue regular care.',
          action: 'Continue preventive measures'
        };
      case 'early blight':
        return {
          english: 'Early blight detected. Start treatment immediately.',
          action: 'Apply fungicide spray'
        };
      case 'late blight':
        return {
          english: 'Late blight detected - immediate action required.',
          action: 'Consult agricultural expert'
        };
      default:
        return {
          english: 'Result interpretation not available.',
          action: 'Further examination needed'
        };
    }
  };

  const confidencePercentage = Math.round(confidence * 100);
  const recommendation = getRecommendation(diseaseClass);

  return (
    <div className="space-y-6">
      {/* Main Result */}
      <div className="text-center">
        <div className="text-4xl mb-3">
          {getEmoji(diseaseClass)}
        </div>
        <div className="space-y-2">
          <span className={getDiseaseBadgeClass(diseaseClass)}>
            {diseaseClass}
          </span>
          <div className="mt-3">
            <div className="text-2xl font-bold text-farm-green-800">
              {confidencePercentage}%
            </div>
            <div className="text-sm text-earth-brown-600">
              Confidence
            </div>
          </div>
        </div>
      </div>

      {/* Confidence Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-earth-brown-600">
          <span>Confidence Level</span>
          <span>{confidencePercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${
              confidencePercentage >= 80
                ? 'bg-farm-green-500'
                : confidencePercentage >= 60
                ? 'bg-crop-yellow-500'
                : 'bg-red-500'
            }`}
            style={{ width: `${confidencePercentage}%` }}
          ></div>
        </div>
        <div className="text-xs text-earth-brown-500 text-center">
          {confidencePercentage >= 80
            ? 'High Confidence'
            : confidencePercentage >= 60
            ? 'Medium Confidence'
            : 'Low Confidence'}
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-gradient-to-r from-farm-green-50 to-crop-yellow-50 border border-farm-green-200 rounded-lg p-4">
        <h4 className="font-semibold text-farm-green-800 mb-3 flex items-center gap-2">
          💊 Recommendation
        </h4>
        <div className="space-y-2 text-sm">
          <p className="text-earth-brown-700 font-medium">
            {recommendation.english}
          </p>
          <div className="mt-3 p-2 bg-white rounded border-l-4 border-farm-green-500">
            <p className="text-farm-green-700 font-medium">
              🎯 {recommendation.action}
            </p>
          </div>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="btn-secondary text-sm py-2">
          📞 Contact Expert
        </button>
        <button className="btn-secondary text-sm py-2">
          📊 Save Report
        </button>
      </div>

      {/* Disclaimer */}
      <div className="text-xs text-earth-brown-500 text-center p-3 bg-gray-50 rounded">
        ⚠️ This is an AI-based diagnosis. Consult agricultural experts for serious cases.
      </div>
    </div>
  );
};

export default ResultDisplay;
